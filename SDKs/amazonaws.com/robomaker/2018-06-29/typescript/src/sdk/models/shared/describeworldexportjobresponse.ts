import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldExportJobErrorCodeEnum } from "./worldexportjoberrorcodeenum";
import { OutputLocation } from "./outputlocation";
import { WorldExportJobStatusEnum } from "./worldexportjobstatusenum";


export class DescribeWorldExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=failureCode" })
  failureCode?: WorldExportJobErrorCodeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=iamRole" })
  iamRole?: string;

  @Metadata({ data: "json, name=outputLocation" })
  outputLocation?: OutputLocation;

  @Metadata({ data: "json, name=status" })
  status?: WorldExportJobStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=worlds" })
  worlds?: string[];
}
