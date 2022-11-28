import { SpeakeasyBase } from "../../../internal/utils";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";
import { DataLakeResourceTypeEnum } from "./datalakeresourcetypeenum";
export declare class ListPermissionsRequest extends SpeakeasyBase {
    catalogId?: string;
    maxResults?: number;
    nextToken?: string;
    principal?: DataLakePrincipal;
    resource?: Resource;
    resourceType?: DataLakeResourceTypeEnum;
}
