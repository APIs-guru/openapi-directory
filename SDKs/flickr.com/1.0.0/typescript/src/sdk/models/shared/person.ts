import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cover } from "./cover";
import { PhotoUrLs } from "./photourls";


export class PersonDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonDisableKeyboardShortcuts extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonMboxSha1sum extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonMobileurl extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotosCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotosFirstdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotosFirstdatetaken extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotosViews extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotos extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: PersonPhotosCount;

  @Metadata({ data: "json, name=firstdate" })
  firstdate?: PersonPhotosFirstdate;

  @Metadata({ data: "json, name=firstdatetaken" })
  firstdatetaken?: PersonPhotosFirstdatetaken;

  @Metadata({ data: "json, name=views" })
  views?: PersonPhotosViews;
}


export class PersonPhotosurl extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonProfileurl extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonRealname extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonTimezone extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: string;

  @Metadata({ data: "json, name=timezone_id" })
  timezoneId?: string;
}


export class PersonUnreadMessages extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonUsername extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class Person extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_buy_pro" })
  canBuyPro?: boolean;

  @Metadata({ data: "json, name=cover" })
  cover?: Cover;

  @Metadata({ data: "json, name=coverphoto" })
  coverphoto?: PhotoUrLs;

  @Metadata({ data: "json, name=coverphoto_farm" })
  coverphotoFarm?: string;

  @Metadata({ data: "json, name=coverphoto_server" })
  coverphotoServer?: string;

  @Metadata({ data: "json, name=description" })
  description?: PersonDescription;

  @Metadata({ data: "json, name=disable_keyboard_shortcuts" })
  disableKeyboardShortcuts?: PersonDisableKeyboardShortcuts;

  @Metadata({ data: "json, name=expire" })
  expire?: boolean;

  @Metadata({ data: "json, name=has_stats" })
  hasStats?: boolean;

  @Metadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @Metadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_ad_free" })
  isAdFree?: boolean;

  @Metadata({ data: "json, name=ispro" })
  ispro?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: PersonLocation;

  @Metadata({ data: "json, name=mbox_sha1sum" })
  mboxSha1sum?: PersonMboxSha1sum;

  @Metadata({ data: "json, name=mobileurl" })
  mobileurl?: PersonMobileurl;

  @Metadata({ data: "json, name=nsid" })
  nsid?: string;

  @Metadata({ data: "json, name=path_alias" })
  pathAlias?: string;

  @Metadata({ data: "json, name=photos" })
  photos?: PersonPhotos;

  @Metadata({ data: "json, name=photosurl" })
  photosurl?: PersonPhotosurl;

  @Metadata({ data: "json, name=profileurl" })
  profileurl?: PersonProfileurl;

  @Metadata({ data: "json, name=realname" })
  realname?: PersonRealname;

  @Metadata({ data: "json, name=timezone" })
  timezone?: PersonTimezone;

  @Metadata({ data: "json, name=unread_messages" })
  unreadMessages?: PersonUnreadMessages;

  @Metadata({ data: "json, name=user_secret" })
  userSecret?: string;

  @Metadata({ data: "json, name=username" })
  username?: PersonUsername;

  @Metadata({ data: "json, name=yintl" })
  yintl?: string;
}
