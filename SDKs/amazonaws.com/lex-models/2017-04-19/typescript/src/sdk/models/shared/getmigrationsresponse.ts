import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationSummary } from "./migrationsummary";



export class GetMigrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migrationSummaries", elemType: MigrationSummary })
  migrationSummaries?: MigrationSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
