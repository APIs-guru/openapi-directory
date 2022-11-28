import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Operational metadata for an application in Application Manager.
**/
export declare class OpsMetadata extends SpeakeasyBase {
    creationDate?: Date;
    lastModifiedDate?: Date;
    lastModifiedUser?: string;
    opsMetadataArn?: string;
    resourceId?: string;
}
