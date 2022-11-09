import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ImageDetailConfig extends SpeakeasyBase {
    argsEscaped?: boolean;
    attachStderr?: boolean;
    attachStdin?: boolean;
    attachStdout?: boolean;
    cmd?: string[];
    domainmame?: string;
    entrypoint?: string;
    env?: string[];
    exposedPorts?: string[];
    hostname?: string;
    image?: string;
    labels?: string[];
    onBuild?: string[];
    openStdin?: boolean;
    stdinOnce?: boolean;
    tty?: boolean;
    user?: string;
    volumes?: string;
    workingDir?: string;
}
export declare class ImageDetail extends SpeakeasyBase {
    architecture?: string;
    config?: ImageDetailConfig;
    container?: string;
    containerConfig?: any;
    created?: string;
    dockerVersion?: string;
    id?: string;
    os?: string;
    parent?: string;
    size?: number;
    tag?: string;
    throwaway?: string;
    virtualSize?: number;
}
