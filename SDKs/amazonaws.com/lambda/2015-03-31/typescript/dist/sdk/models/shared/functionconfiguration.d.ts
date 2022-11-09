import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeadLetterConfig } from "./deadletterconfig";
import { EnvironmentResponse } from "./environmentresponse";
import { FileSystemConfig } from "./filesystemconfig";
import { ImageConfigResponse } from "./imageconfigresponse";
import { LastUpdateStatusEnum } from "./lastupdatestatusenum";
import { LastUpdateStatusReasonCodeEnum } from "./lastupdatestatusreasoncodeenum";
import { Layer } from "./layer";
import { PackageTypeEnum } from "./packagetypeenum";
import { RuntimeEnum } from "./runtimeenum";
import { StateEnum } from "./stateenum";
import { StateReasonCodeEnum } from "./statereasoncodeenum";
import { TracingConfigResponse } from "./tracingconfigresponse";
import { VpcConfigResponse } from "./vpcconfigresponse";
/**
 * Details about a function's configuration.
**/
export declare class FunctionConfiguration extends SpeakeasyBase {
    codeSha256?: string;
    codeSize?: number;
    deadLetterConfig?: DeadLetterConfig;
    description?: string;
    environment?: EnvironmentResponse;
    fileSystemConfigs?: FileSystemConfig[];
    functionArn?: string;
    functionName?: string;
    handler?: string;
    imageConfigResponse?: ImageConfigResponse;
    kmsKeyArn?: string;
    lastModified?: string;
    lastUpdateStatus?: LastUpdateStatusEnum;
    lastUpdateStatusReason?: string;
    lastUpdateStatusReasonCode?: LastUpdateStatusReasonCodeEnum;
    layers?: Layer[];
    masterArn?: string;
    memorySize?: number;
    packageType?: PackageTypeEnum;
    revisionId?: string;
    role?: string;
    runtime?: RuntimeEnum;
    signingJobArn?: string;
    signingProfileVersionArn?: string;
    state?: StateEnum;
    stateReason?: string;
    stateReasonCode?: StateReasonCodeEnum;
    timeout?: number;
    tracingConfig?: TracingConfigResponse;
    version?: string;
    vpcConfig?: VpcConfigResponse;
}
