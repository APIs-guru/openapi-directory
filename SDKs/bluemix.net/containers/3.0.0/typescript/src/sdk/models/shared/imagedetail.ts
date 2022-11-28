import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageDetailConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArgsEscaped" })
  argsEscaped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AttachStderr" })
  attachStderr?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AttachStdin" })
  attachStdin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AttachStdout" })
  attachStdout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Cmd" })
  cmd?: string[];

  @SpeakeasyMetadata({ data: "json, name=Domainmame" })
  domainmame?: string;

  @SpeakeasyMetadata({ data: "json, name=Entrypoint" })
  entrypoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Env" })
  env?: string[];

  @SpeakeasyMetadata({ data: "json, name=ExposedPorts" })
  exposedPorts?: string[];

  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=Labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=OnBuild" })
  onBuild?: string[];

  @SpeakeasyMetadata({ data: "json, name=OpenStdin" })
  openStdin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StdinOnce" })
  stdinOnce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Tty" })
  tty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=Volumes" })
  volumes?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkingDir" })
  workingDir?: string;
}


export class ImageDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Architecture" })
  architecture?: string;

  @SpeakeasyMetadata({ data: "json, name=Config" })
  config?: ImageDetailConfig;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=ContainerConfig" })
  containerConfig?: any;

  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=DockerVersion" })
  dockerVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=Parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=Throwaway" })
  throwaway?: string;

  @SpeakeasyMetadata({ data: "json, name=VirtualSize" })
  virtualSize?: number;
}
