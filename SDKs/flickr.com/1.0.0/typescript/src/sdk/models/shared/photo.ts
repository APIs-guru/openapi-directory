import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";
import { Owner } from "./owner";
import { Tag } from "./tag";
import { Url } from "./url";



export class PhotoComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PhotoDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastupdate" })
  lastupdate?: string;

  @SpeakeasyMetadata({ data: "json, name=posted" })
  posted?: string;

  @SpeakeasyMetadata({ data: "json, name=taken" })
  taken?: string;

  @SpeakeasyMetadata({ data: "json, name=takengranularity" })
  takengranularity?: string;

  @SpeakeasyMetadata({ data: "json, name=takenunknown" })
  takenunknown?: boolean;
}


export class PhotoDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PhotoEditability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canaddmeta" })
  canaddmeta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancomment" })
  cancomment?: boolean;
}


export class PhotoNotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note", elemType: Note })
  note?: Note[];
}


export class PhotoPeople extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=haspeople" })
  haspeople?: boolean;
}


export class PhotoPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permaddmeta" })
  permaddmeta?: string;

  @SpeakeasyMetadata({ data: "json, name=permcomment" })
  permcomment?: string;
}


export class PhotoPubliceditability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canaddmeta" })
  canaddmeta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancomment" })
  cancomment?: boolean;
}


export class PhotoTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag", elemType: Tag })
  tag?: Tag[];
}


export class PhotoTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PhotoUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url", elemType: Url })
  url?: Url[];
}


export class PhotoUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canblog" })
  canblog?: boolean;

  @SpeakeasyMetadata({ data: "json, name=candownload" })
  candownload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canprint" })
  canprint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canshare" })
  canshare?: boolean;
}


export class PhotoVisibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isfamily" })
  isfamily?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isfriend" })
  isfriend?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ispublic" })
  ispublic?: boolean;
}


export class Photo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: PhotoComments;

  @SpeakeasyMetadata({ data: "json, name=dates" })
  dates?: PhotoDates;

  @SpeakeasyMetadata({ data: "json, name=dateuploaded" })
  dateuploaded?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: PhotoDescription;

  @SpeakeasyMetadata({ data: "json, name=editability" })
  editability?: PhotoEditability;

  @SpeakeasyMetadata({ data: "json, name=farm" })
  farm?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isfavorite" })
  isfavorite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: PhotoNotes;

  @SpeakeasyMetadata({ data: "json, name=originalsecret" })
  originalsecret?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: Owner;

  @SpeakeasyMetadata({ data: "json, name=people" })
  people?: PhotoPeople;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: PhotoPermissions;

  @SpeakeasyMetadata({ data: "json, name=publiceditability" })
  publiceditability?: PhotoPubliceditability;

  @SpeakeasyMetadata({ data: "json, name=rotation" })
  rotation?: string;

  @SpeakeasyMetadata({ data: "json, name=safe" })
  safe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=safety_level" })
  safetyLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: PhotoTags;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: PhotoTitle;

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: PhotoUrls;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: PhotoUsage;

  @SpeakeasyMetadata({ data: "json, name=views" })
  views?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: PhotoVisibility;
}
