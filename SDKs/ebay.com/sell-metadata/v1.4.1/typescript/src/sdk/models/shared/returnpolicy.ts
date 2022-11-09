import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReturnPolicyDetails } from "./returnpolicydetails";
import { ReturnPolicyDetails } from "./returnpolicydetails";


export class ReturnPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @Metadata({ data: "json, name=domestic" })
  domestic?: ReturnPolicyDetails;

  @Metadata({ data: "json, name=international" })
  international?: ReturnPolicyDetails;

  @Metadata({ data: "json, name=required" })
  required?: boolean;
}
