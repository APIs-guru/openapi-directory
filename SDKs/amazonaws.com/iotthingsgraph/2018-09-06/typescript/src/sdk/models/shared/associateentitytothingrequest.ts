import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateEntityToThingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityId" })
  entityId: string;

  @Metadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @Metadata({ data: "json, name=thingName" })
  thingName: string;
}
