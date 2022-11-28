import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoTagsTag } from "./apicoredtotagstag";
export declare class ApiCoreDtoGroupsGroup extends SpeakeasyBase {
    creationDate?: string;
    deleted?: boolean;
    id?: number;
    isPublic?: boolean;
    name?: string;
    notes?: string;
    preferred?: boolean;
    redirectOnly?: boolean;
    tags?: ApiCoreDtoTagsTag[];
    writePermited?: boolean;
}
