import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubjectTypesRepositoryLink
/** 
 * A link to a resource related to this object.
**/
export class SubjectTypesRepositoryLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SubjectTypesRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=events" })
  events?: SubjectTypesRepositoryLink;
}


// SubjectTypesTeamLink
/** 
 * A link to a resource related to this object.
**/
export class SubjectTypesTeamLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SubjectTypesTeam extends SpeakeasyBase {
  @Metadata({ data: "json, name=events" })
  events?: SubjectTypesTeamLink;
}


// SubjectTypesUserLink
/** 
 * A link to a resource related to this object.
**/
export class SubjectTypesUserLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SubjectTypesUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=events" })
  events?: SubjectTypesUserLink;
}


// SubjectTypes
/** 
 * The mapping of resource/subject types pointing to their individual event types.
**/
export class SubjectTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=repository" })
  repository?: SubjectTypesRepository;

  @Metadata({ data: "json, name=team" })
  team?: SubjectTypesTeam;

  @Metadata({ data: "json, name=user" })
  user?: SubjectTypesUser;
}
