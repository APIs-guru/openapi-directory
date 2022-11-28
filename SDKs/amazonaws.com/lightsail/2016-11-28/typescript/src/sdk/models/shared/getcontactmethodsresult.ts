import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactMethod } from "./contactmethod";



export class GetContactMethodsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactMethods", elemType: ContactMethod })
  contactMethods?: ContactMethod[];
}
