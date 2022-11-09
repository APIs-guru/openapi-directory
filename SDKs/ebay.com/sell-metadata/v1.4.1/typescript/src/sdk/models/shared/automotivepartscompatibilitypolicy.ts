import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutomotivePartsCompatibilityPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @Metadata({ data: "json, name=compatibilityBasedOn" })
  compatibilityBasedOn?: string;

  @Metadata({ data: "json, name=compatibleVehicleTypes" })
  compatibleVehicleTypes?: string[];

  @Metadata({ data: "json, name=maxNumberOfCompatibleVehicles" })
  maxNumberOfCompatibleVehicles?: number;
}
