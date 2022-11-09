import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CodeSha256" })
  codeSha256?: string;

  @Metadata({ data: "json, name=CodeSize" })
  codeSize?: number;

  @Metadata({ data: "json, name=DeadLetterConfig" })
  deadLetterConfig?: DeadLetterConfig;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: EnvironmentResponse;

  @Metadata({ data: "json, name=FileSystemConfigs", elemType: shared.FileSystemConfig })
  fileSystemConfigs?: FileSystemConfig[];

  @Metadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @Metadata({ data: "json, name=FunctionName" })
  functionName?: string;

  @Metadata({ data: "json, name=Handler" })
  handler?: string;

  @Metadata({ data: "json, name=ImageConfigResponse" })
  imageConfigResponse?: ImageConfigResponse;

  @Metadata({ data: "json, name=KMSKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=LastUpdateStatus" })
  lastUpdateStatus?: LastUpdateStatusEnum;

  @Metadata({ data: "json, name=LastUpdateStatusReason" })
  lastUpdateStatusReason?: string;

  @Metadata({ data: "json, name=LastUpdateStatusReasonCode" })
  lastUpdateStatusReasonCode?: LastUpdateStatusReasonCodeEnum;

  @Metadata({ data: "json, name=Layers", elemType: shared.Layer })
  layers?: Layer[];

  @Metadata({ data: "json, name=MasterArn" })
  masterArn?: string;

  @Metadata({ data: "json, name=MemorySize" })
  memorySize?: number;

  @Metadata({ data: "json, name=PackageType" })
  packageType?: PackageTypeEnum;

  @Metadata({ data: "json, name=RevisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Runtime" })
  runtime?: RuntimeEnum;

  @Metadata({ data: "json, name=SigningJobArn" })
  signingJobArn?: string;

  @Metadata({ data: "json, name=SigningProfileVersionArn" })
  signingProfileVersionArn?: string;

  @Metadata({ data: "json, name=State" })
  state?: StateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @Metadata({ data: "json, name=StateReasonCode" })
  stateReasonCode?: StateReasonCodeEnum;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=TracingConfig" })
  tracingConfig?: TracingConfigResponse;

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfigResponse;
}
