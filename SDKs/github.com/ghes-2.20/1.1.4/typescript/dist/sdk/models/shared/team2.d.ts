import { SpeakeasyBase } from "../../../internal/utils";
export declare class Team2Parent extends SpeakeasyBase {
    description?: string;
    htmlUrl?: string;
    id?: number;
    membersUrl?: string;
    name?: string;
    nodeId?: string;
    permission?: string;
    privacy?: string;
    repositoriesUrl?: string;
    slug?: string;
    url?: string;
}
export declare class Team2 extends SpeakeasyBase {
    description?: string;
    id?: number;
    membersUrl?: string;
    name?: string;
    nodeId?: string;
    parent?: Team2Parent;
    permission?: string;
    privacy?: string;
    repositoriesUrl?: string;
    slug?: string;
    url?: string;
}
