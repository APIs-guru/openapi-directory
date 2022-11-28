import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateEntityToThingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName: string;
}
