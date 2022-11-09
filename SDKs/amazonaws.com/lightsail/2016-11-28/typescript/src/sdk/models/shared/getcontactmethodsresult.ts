import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactMethod } from "./contactmethod";


export class GetContactMethodsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactMethods", elemType: shared.ContactMethod })
  contactMethods?: ContactMethod[];
}
