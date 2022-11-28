import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubjectTypesRepositoryLink
/** 
 * A link to a resource related to this object.
**/
export class SubjectTypesRepositoryLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SubjectTypesRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: SubjectTypesRepositoryLink;
}


// SubjectTypesTeamLink
/** 
 * A link to a resource related to this object.
**/
export class SubjectTypesTeamLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SubjectTypesTeam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: SubjectTypesTeamLink;
}


// SubjectTypesUserLink
/** 
 * A link to a resource related to this object.
**/
export class SubjectTypesUserLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SubjectTypesUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: SubjectTypesUserLink;
}


// SubjectTypes
/** 
 * The mapping of resource/subject types pointing to their individual event types.
**/
export class SubjectTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: SubjectTypesRepository;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: SubjectTypesTeam;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: SubjectTypesUser;
}
