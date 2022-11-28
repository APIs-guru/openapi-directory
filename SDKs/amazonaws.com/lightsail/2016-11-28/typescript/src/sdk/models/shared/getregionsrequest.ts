import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeAvailabilityZones" })
  includeAvailabilityZones?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeRelationalDatabaseAvailabilityZones" })
  includeRelationalDatabaseAvailabilityZones?: boolean;
}
