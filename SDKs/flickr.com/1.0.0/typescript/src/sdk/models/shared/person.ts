import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cover } from "./cover";
import { PhotoUrLs } from "./photourls";



export class PersonDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonDisableKeyboardShortcuts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonMboxSha1sum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonMobileurl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotosCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotosFirstdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotosFirstdatetaken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotosViews extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonPhotos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: PersonPhotosCount;

  @SpeakeasyMetadata({ data: "json, name=firstdate" })
  firstdate?: PersonPhotosFirstdate;

  @SpeakeasyMetadata({ data: "json, name=firstdatetaken" })
  firstdatetaken?: PersonPhotosFirstdatetaken;

  @SpeakeasyMetadata({ data: "json, name=views" })
  views?: PersonPhotosViews;
}


export class PersonPhotosurl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonProfileurl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonRealname extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonTimezone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone_id" })
  timezoneId?: string;
}


export class PersonUnreadMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class PersonUsername extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_buy_pro" })
  canBuyPro?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cover" })
  cover?: Cover;

  @SpeakeasyMetadata({ data: "json, name=coverphoto" })
  coverphoto?: PhotoUrLs;

  @SpeakeasyMetadata({ data: "json, name=coverphoto_farm" })
  coverphotoFarm?: string;

  @SpeakeasyMetadata({ data: "json, name=coverphoto_server" })
  coverphotoServer?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: PersonDescription;

  @SpeakeasyMetadata({ data: "json, name=disable_keyboard_shortcuts" })
  disableKeyboardShortcuts?: PersonDisableKeyboardShortcuts;

  @SpeakeasyMetadata({ data: "json, name=expire" })
  expire?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_stats" })
  hasStats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iconfarm" })
  iconfarm?: string;

  @SpeakeasyMetadata({ data: "json, name=iconserver" })
  iconserver?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_ad_free" })
  isAdFree?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ispro" })
  ispro?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: PersonLocation;

  @SpeakeasyMetadata({ data: "json, name=mbox_sha1sum" })
  mboxSha1sum?: PersonMboxSha1sum;

  @SpeakeasyMetadata({ data: "json, name=mobileurl" })
  mobileurl?: PersonMobileurl;

  @SpeakeasyMetadata({ data: "json, name=nsid" })
  nsid?: string;

  @SpeakeasyMetadata({ data: "json, name=path_alias" })
  pathAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=photos" })
  photos?: PersonPhotos;

  @SpeakeasyMetadata({ data: "json, name=photosurl" })
  photosurl?: PersonPhotosurl;

  @SpeakeasyMetadata({ data: "json, name=profileurl" })
  profileurl?: PersonProfileurl;

  @SpeakeasyMetadata({ data: "json, name=realname" })
  realname?: PersonRealname;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: PersonTimezone;

  @SpeakeasyMetadata({ data: "json, name=unread_messages" })
  unreadMessages?: PersonUnreadMessages;

  @SpeakeasyMetadata({ data: "json, name=user_secret" })
  userSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: PersonUsername;

  @SpeakeasyMetadata({ data: "json, name=yintl" })
  yintl?: string;
}
