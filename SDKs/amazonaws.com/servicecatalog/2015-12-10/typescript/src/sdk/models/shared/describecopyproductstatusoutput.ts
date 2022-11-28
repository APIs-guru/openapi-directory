import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CopyProductStatusEnum } from "./copyproductstatusenum";



export class DescribeCopyProductStatusOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CopyProductStatus" })
  copyProductStatus?: CopyProductStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetProductId" })
  targetProductId?: string;
}
