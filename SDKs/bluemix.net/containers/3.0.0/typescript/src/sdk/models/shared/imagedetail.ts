import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageDetailConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArgsEscaped" })
  argsEscaped?: boolean;

  @Metadata({ data: "json, name=AttachStderr" })
  attachStderr?: boolean;

  @Metadata({ data: "json, name=AttachStdin" })
  attachStdin?: boolean;

  @Metadata({ data: "json, name=AttachStdout" })
  attachStdout?: boolean;

  @Metadata({ data: "json, name=Cmd" })
  cmd?: string[];

  @Metadata({ data: "json, name=Domainmame" })
  domainmame?: string;

  @Metadata({ data: "json, name=Entrypoint" })
  entrypoint?: string;

  @Metadata({ data: "json, name=Env" })
  env?: string[];

  @Metadata({ data: "json, name=ExposedPorts" })
  exposedPorts?: string[];

  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=Image" })
  image?: string;

  @Metadata({ data: "json, name=Labels" })
  labels?: string[];

  @Metadata({ data: "json, name=OnBuild" })
  onBuild?: string[];

  @Metadata({ data: "json, name=OpenStdin" })
  openStdin?: boolean;

  @Metadata({ data: "json, name=StdinOnce" })
  stdinOnce?: boolean;

  @Metadata({ data: "json, name=Tty" })
  tty?: boolean;

  @Metadata({ data: "json, name=User" })
  user?: string;

  @Metadata({ data: "json, name=Volumes" })
  volumes?: string;

  @Metadata({ data: "json, name=WorkingDir" })
  workingDir?: string;
}


export class ImageDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Architecture" })
  architecture?: string;

  @Metadata({ data: "json, name=Config" })
  config?: ImageDetailConfig;

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=ContainerConfig" })
  containerConfig?: any;

  @Metadata({ data: "json, name=Created" })
  created?: string;

  @Metadata({ data: "json, name=DockerVersion" })
  dockerVersion?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Os" })
  os?: string;

  @Metadata({ data: "json, name=Parent" })
  parent?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=Tag" })
  tag?: string;

  @Metadata({ data: "json, name=Throwaway" })
  throwaway?: string;

  @Metadata({ data: "json, name=VirtualSize" })
  virtualSize?: number;
}
