import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cover } from "./cover";
import { PhotoUrLs } from "./photourls";



export class GroupBlast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=date_blast_added" })
  dateBlastAdded?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}


export class GroupDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupPoolCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=art_ok" })
  artOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_geo" })
  hasGeo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=images_ok" })
  imagesOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=moderate_ok" })
  moderateOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=photos_ok" })
  photosOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restricted_ok" })
  restrictedOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=safe_ok" })
  safeOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=screens_ok" })
  screensOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=videos_ok" })
  videosOk?: boolean;
}


export class GroupRoles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: string;

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: string;

  @SpeakeasyMetadata({ data: "json, name=moderator" })
  moderator?: string;
}


export class GroupRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GroupThrottle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=remaining" })
  remaining?: string;
}


export class GroupTopicCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blast" })
  blast?: GroupBlast;

  @SpeakeasyMetadata({ data: "json, name=cover" })
  cover?: Cover;

  @SpeakeasyMetadata({ data: "json, name=coverphoto_farm" })
  coverphotoFarm?: string;

  @SpeakeasyMetadata({ data: "json, name=coverphoto_server" })
  coverphotoServer?: string;

  @SpeakeasyMetadata({ data: "json, name=coverphoto_url" })
  coverphotoUrl?: PhotoUrLs;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: GroupDescription;

  @SpeakeasyMetadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @SpeakeasyMetadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_admin" })
  isAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_member" })
  isMember?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_moderator" })
  isModerator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ispoolmoderated" })
  ispoolmoderated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: GroupMembers;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: GroupName;

  @SpeakeasyMetadata({ data: "json, name=path_alias" })
  pathAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=pool_count" })
  poolCount?: GroupPoolCount;

  @SpeakeasyMetadata({ data: "json, name=pool_rows" })
  poolRows?: number;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: GroupPrivacy;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: GroupRestrictions;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: GroupRoles;

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules?: GroupRules;

  @SpeakeasyMetadata({ data: "json, name=throttle" })
  throttle?: GroupThrottle;

  @SpeakeasyMetadata({ data: "json, name=topic_count" })
  topicCount?: GroupTopicCount;
}
