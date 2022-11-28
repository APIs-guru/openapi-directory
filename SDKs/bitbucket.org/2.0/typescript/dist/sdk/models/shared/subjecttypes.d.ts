import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link to a resource related to this object.
**/
export declare class SubjectTypesRepositoryLink extends SpeakeasyBase {
    href?: string;
    name?: string;
}
export declare class SubjectTypesRepository extends SpeakeasyBase {
    events?: SubjectTypesRepositoryLink;
}
/**
 * A link to a resource related to this object.
**/
export declare class SubjectTypesTeamLink extends SpeakeasyBase {
    href?: string;
    name?: string;
}
export declare class SubjectTypesTeam extends SpeakeasyBase {
    events?: SubjectTypesTeamLink;
}
/**
 * A link to a resource related to this object.
**/
export declare class SubjectTypesUserLink extends SpeakeasyBase {
    href?: string;
    name?: string;
}
export declare class SubjectTypesUser extends SpeakeasyBase {
    events?: SubjectTypesUserLink;
}
/**
 * The mapping of resource/subject types pointing to their individual event types.
**/
export declare class SubjectTypes extends SpeakeasyBase {
    repository?: SubjectTypesRepository;
    team?: SubjectTypesTeam;
    user?: SubjectTypesUser;
}
