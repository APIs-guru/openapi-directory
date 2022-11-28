import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutomotivePartsCompatibilityPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibilityBasedOn" })
  compatibilityBasedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibleVehicleTypes" })
  compatibleVehicleTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxNumberOfCompatibleVehicles" })
  maxNumberOfCompatibleVehicles?: number;
}
