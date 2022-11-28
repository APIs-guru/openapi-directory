import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDataIdentifierSummary } from "./customdataidentifiersummary";



export class ListCustomDataIdentifiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CustomDataIdentifierSummary })
  items?: CustomDataIdentifierSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
