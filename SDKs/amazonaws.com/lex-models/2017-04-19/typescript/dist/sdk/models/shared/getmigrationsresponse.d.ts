import { SpeakeasyBase } from "../../../internal/utils";
import { MigrationSummary } from "./migrationsummary";
export declare class GetMigrationsResponse extends SpeakeasyBase {
    migrationSummaries?: MigrationSummary[];
    nextToken?: string;
}
