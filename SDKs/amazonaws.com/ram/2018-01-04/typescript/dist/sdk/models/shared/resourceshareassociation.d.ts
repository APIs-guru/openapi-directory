import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShareAssociationTypeEnum } from "./resourceshareassociationtypeenum";
import { ResourceShareAssociationStatusEnum } from "./resourceshareassociationstatusenum";
/**
 * Describes an association with a resource share.
**/
export declare class ResourceShareAssociation extends SpeakeasyBase {
    associatedEntity?: string;
    associationType?: ResourceShareAssociationTypeEnum;
    creationTime?: Date;
    external?: boolean;
    lastUpdatedTime?: Date;
    resourceShareArn?: string;
    resourceShareName?: string;
    status?: ResourceShareAssociationStatusEnum;
    statusMessage?: string;
}
