import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cover } from "./cover";
import { PhotoUrLs } from "./photourls";


export class GroupBlast extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;

  @Metadata({ data: "json, name=date_blast_added" })
  dateBlastAdded?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}


export class GroupDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupMembers extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupName extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupPoolCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=art_ok" })
  artOk?: boolean;

  @Metadata({ data: "json, name=has_geo" })
  hasGeo?: boolean;

  @Metadata({ data: "json, name=images_ok" })
  imagesOk?: boolean;

  @Metadata({ data: "json, name=moderate_ok" })
  moderateOk?: boolean;

  @Metadata({ data: "json, name=photos_ok" })
  photosOk?: boolean;

  @Metadata({ data: "json, name=restricted_ok" })
  restrictedOk?: boolean;

  @Metadata({ data: "json, name=safe_ok" })
  safeOk?: boolean;

  @Metadata({ data: "json, name=screens_ok" })
  screensOk?: boolean;

  @Metadata({ data: "json, name=videos_ok" })
  videosOk?: boolean;
}


export class GroupRoles extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: string;

  @Metadata({ data: "json, name=member" })
  member?: string;

  @Metadata({ data: "json, name=moderator" })
  moderator?: string;
}


export class GroupRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupThrottle extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=remaining" })
  remaining?: string;
}


export class GroupTopicCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=blast" })
  blast?: GroupBlast;

  @Metadata({ data: "json, name=cover" })
  cover?: Cover;

  @Metadata({ data: "json, name=coverphoto_farm" })
  coverphotoFarm?: string;

  @Metadata({ data: "json, name=coverphoto_server" })
  coverphotoServer?: string;

  @Metadata({ data: "json, name=coverphoto_url" })
  coverphotoUrl?: PhotoUrLs;

  @Metadata({ data: "json, name=description" })
  description?: GroupDescription;

  @Metadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @Metadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_admin" })
  isAdmin?: boolean;

  @Metadata({ data: "json, name=is_member" })
  isMember?: boolean;

  @Metadata({ data: "json, name=is_moderator" })
  isModerator?: boolean;

  @Metadata({ data: "json, name=ispoolmoderated" })
  ispoolmoderated?: boolean;

  @Metadata({ data: "json, name=lang" })
  lang?: string;

  @Metadata({ data: "json, name=members" })
  members?: GroupMembers;

  @Metadata({ data: "json, name=name" })
  name?: GroupName;

  @Metadata({ data: "json, name=path_alias" })
  pathAlias?: string;

  @Metadata({ data: "json, name=pool_count" })
  poolCount?: GroupPoolCount;

  @Metadata({ data: "json, name=pool_rows" })
  poolRows?: number;

  @Metadata({ data: "json, name=privacy" })
  privacy?: GroupPrivacy;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: GroupRestrictions;

  @Metadata({ data: "json, name=roles" })
  roles?: GroupRoles;

  @Metadata({ data: "json, name=rules" })
  rules?: GroupRules;

  @Metadata({ data: "json, name=throttle" })
  throttle?: GroupThrottle;

  @Metadata({ data: "json, name=topic_count" })
  topicCount?: GroupTopicCount;
}
