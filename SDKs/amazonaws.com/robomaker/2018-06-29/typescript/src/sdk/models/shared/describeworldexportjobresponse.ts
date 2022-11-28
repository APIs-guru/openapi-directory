import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldExportJobErrorCodeEnum } from "./worldexportjoberrorcodeenum";
import { OutputLocation } from "./outputlocation";
import { WorldExportJobStatusEnum } from "./worldexportjobstatusenum";



export class DescribeWorldExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: WorldExportJobErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=iamRole" })
  iamRole?: string;

  @SpeakeasyMetadata({ data: "json, name=outputLocation" })
  outputLocation?: OutputLocation;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WorldExportJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=worlds" })
  worlds?: string[];
}
