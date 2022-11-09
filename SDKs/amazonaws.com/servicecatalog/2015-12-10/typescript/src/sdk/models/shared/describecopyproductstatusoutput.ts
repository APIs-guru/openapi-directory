import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CopyProductStatusEnum } from "./copyproductstatusenum";


export class DescribeCopyProductStatusOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CopyProductStatus" })
  copyProductStatus?: CopyProductStatusEnum;

  @Metadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;

  @Metadata({ data: "json, name=TargetProductId" })
  targetProductId?: string;
}
