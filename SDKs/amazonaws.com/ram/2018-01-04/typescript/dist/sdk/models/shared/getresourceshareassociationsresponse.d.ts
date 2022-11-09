import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";
export declare class GetResourceShareAssociationsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceShareAssociations?: ResourceShareAssociation[];
}
