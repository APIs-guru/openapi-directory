import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRegionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeAvailabilityZones" })
  includeAvailabilityZones?: boolean;

  @Metadata({ data: "json, name=includeRelationalDatabaseAvailabilityZones" })
  includeRelationalDatabaseAvailabilityZones?: boolean;
}
