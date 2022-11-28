import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyDetails } from "./returnpolicydetails";



export class ReturnPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @SpeakeasyMetadata({ data: "json, name=domestic" })
  domestic?: ReturnPolicyDetails;

  @SpeakeasyMetadata({ data: "json, name=international" })
  international?: ReturnPolicyDetails;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
