import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// FunctionConfiguration
/** 
 * Details about a function's configuration.
**/
export class FunctionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeSha256" })
  codeSha256?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: DeadLetterConfig;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: EnvironmentResponse;

  @SpeakeasyMetadata({ data: "json, name=FileSystemConfigs", elemType: FileSystemConfig })
  fileSystemConfigs?: FileSystemConfig[];

  @SpeakeasyMetadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Handler" })
  handler?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageConfigResponse" })
  imageConfigResponse?: ImageConfigResponse;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateStatus" })
  lastUpdateStatus?: LastUpdateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateStatusReason" })
  lastUpdateStatusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateStatusReasonCode" })
  lastUpdateStatusReasonCode?: LastUpdateStatusReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Layers", elemType: Layer })
  layers?: Layer[];

  @SpeakeasyMetadata({ data: "json, name=MasterArn" })
  masterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=PackageType" })
  packageType?: PackageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Runtime" })
  runtime?: RuntimeEnum;

  @SpeakeasyMetadata({ data: "json, name=SigningJobArn" })
  signingJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SigningProfileVersionArn" })
  signingProfileVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: StateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=StateReasonCode" })
  stateReasonCode?: StateReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=TracingConfig" })
  tracingConfig?: TracingConfigResponse;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfigResponse;
}
