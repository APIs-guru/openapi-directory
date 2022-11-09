import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MigrationSummary } from "./migrationsummary";


export class GetMigrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=migrationSummaries", elemType: shared.MigrationSummary })
  migrationSummaries?: MigrationSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
