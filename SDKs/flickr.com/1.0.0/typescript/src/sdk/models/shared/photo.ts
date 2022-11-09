import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Note } from "./note";
import { Owner } from "./owner";
import { Tag } from "./tag";
import { Url } from "./url";


export class PhotoComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PhotoDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastupdate" })
  lastupdate?: string;

  @Metadata({ data: "json, name=posted" })
  posted?: string;

  @Metadata({ data: "json, name=taken" })
  taken?: string;

  @Metadata({ data: "json, name=takengranularity" })
  takengranularity?: string;

  @Metadata({ data: "json, name=takenunknown" })
  takenunknown?: boolean;
}


export class PhotoDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PhotoEditability extends SpeakeasyBase {
  @Metadata({ data: "json, name=canaddmeta" })
  canaddmeta?: boolean;

  @Metadata({ data: "json, name=cancomment" })
  cancomment?: boolean;
}


export class PhotoNotes extends SpeakeasyBase {
  @Metadata({ data: "json, name=note", elemType: shared.Note })
  note?: Note[];
}


export class PhotoPeople extends SpeakeasyBase {
  @Metadata({ data: "json, name=haspeople" })
  haspeople?: boolean;
}


export class PhotoPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=permaddmeta" })
  permaddmeta?: string;

  @Metadata({ data: "json, name=permcomment" })
  permcomment?: string;
}


export class PhotoPubliceditability extends SpeakeasyBase {
  @Metadata({ data: "json, name=canaddmeta" })
  canaddmeta?: boolean;

  @Metadata({ data: "json, name=cancomment" })
  cancomment?: boolean;
}


export class PhotoTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag", elemType: shared.Tag })
  tag?: Tag[];
}


export class PhotoTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PhotoUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=url", elemType: shared.Url })
  url?: Url[];
}


export class PhotoUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=canblog" })
  canblog?: boolean;

  @Metadata({ data: "json, name=candownload" })
  candownload?: boolean;

  @Metadata({ data: "json, name=canprint" })
  canprint?: boolean;

  @Metadata({ data: "json, name=canshare" })
  canshare?: boolean;
}


export class PhotoVisibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=isfamily" })
  isfamily?: boolean;

  @Metadata({ data: "json, name=isfriend" })
  isfriend?: boolean;

  @Metadata({ data: "json, name=ispublic" })
  ispublic?: boolean;
}


export class Photo extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: PhotoComments;

  @Metadata({ data: "json, name=dates" })
  dates?: PhotoDates;

  @Metadata({ data: "json, name=dateuploaded" })
  dateuploaded?: string;

  @Metadata({ data: "json, name=description" })
  description?: PhotoDescription;

  @Metadata({ data: "json, name=editability" })
  editability?: PhotoEditability;

  @Metadata({ data: "json, name=farm" })
  farm?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isfavorite" })
  isfavorite?: boolean;

  @Metadata({ data: "json, name=license" })
  license?: string;

  @Metadata({ data: "json, name=media" })
  media?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: PhotoNotes;

  @Metadata({ data: "json, name=originalsecret" })
  originalsecret?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: Owner;

  @Metadata({ data: "json, name=people" })
  people?: PhotoPeople;

  @Metadata({ data: "json, name=permissions" })
  permissions?: PhotoPermissions;

  @Metadata({ data: "json, name=publiceditability" })
  publiceditability?: PhotoPubliceditability;

  @Metadata({ data: "json, name=rotation" })
  rotation?: string;

  @Metadata({ data: "json, name=safe" })
  safe?: boolean;

  @Metadata({ data: "json, name=safety_level" })
  safetyLevel?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=server" })
  server?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: PhotoTags;

  @Metadata({ data: "json, name=title" })
  title?: PhotoTitle;

  @Metadata({ data: "json, name=urls" })
  urls?: PhotoUrls;

  @Metadata({ data: "json, name=usage" })
  usage?: PhotoUsage;

  @Metadata({ data: "json, name=views" })
  views?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: PhotoVisibility;
}
