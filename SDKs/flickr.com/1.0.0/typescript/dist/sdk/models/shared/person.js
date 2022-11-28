var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cover } from "./cover";
import { PhotoUrLs } from "./photourls";
var PersonDescription = /** @class */ (function (_super) {
    __extends(PersonDescription, _super);
    function PersonDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonDescription.prototype, "content", void 0);
    return PersonDescription;
}(SpeakeasyBase));
export { PersonDescription };
var PersonDisableKeyboardShortcuts = /** @class */ (function (_super) {
    __extends(PersonDisableKeyboardShortcuts, _super);
    function PersonDisableKeyboardShortcuts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonDisableKeyboardShortcuts.prototype, "content", void 0);
    return PersonDisableKeyboardShortcuts;
}(SpeakeasyBase));
export { PersonDisableKeyboardShortcuts };
var PersonLocation = /** @class */ (function (_super) {
    __extends(PersonLocation, _super);
    function PersonLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonLocation.prototype, "content", void 0);
    return PersonLocation;
}(SpeakeasyBase));
export { PersonLocation };
var PersonMboxSha1sum = /** @class */ (function (_super) {
    __extends(PersonMboxSha1sum, _super);
    function PersonMboxSha1sum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonMboxSha1sum.prototype, "content", void 0);
    return PersonMboxSha1sum;
}(SpeakeasyBase));
export { PersonMboxSha1sum };
var PersonMobileurl = /** @class */ (function (_super) {
    __extends(PersonMobileurl, _super);
    function PersonMobileurl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonMobileurl.prototype, "content", void 0);
    return PersonMobileurl;
}(SpeakeasyBase));
export { PersonMobileurl };
var PersonPhotosCount = /** @class */ (function (_super) {
    __extends(PersonPhotosCount, _super);
    function PersonPhotosCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonPhotosCount.prototype, "content", void 0);
    return PersonPhotosCount;
}(SpeakeasyBase));
export { PersonPhotosCount };
var PersonPhotosFirstdate = /** @class */ (function (_super) {
    __extends(PersonPhotosFirstdate, _super);
    function PersonPhotosFirstdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonPhotosFirstdate.prototype, "content", void 0);
    return PersonPhotosFirstdate;
}(SpeakeasyBase));
export { PersonPhotosFirstdate };
var PersonPhotosFirstdatetaken = /** @class */ (function (_super) {
    __extends(PersonPhotosFirstdatetaken, _super);
    function PersonPhotosFirstdatetaken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonPhotosFirstdatetaken.prototype, "content", void 0);
    return PersonPhotosFirstdatetaken;
}(SpeakeasyBase));
export { PersonPhotosFirstdatetaken };
var PersonPhotosViews = /** @class */ (function (_super) {
    __extends(PersonPhotosViews, _super);
    function PersonPhotosViews() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonPhotosViews.prototype, "content", void 0);
    return PersonPhotosViews;
}(SpeakeasyBase));
export { PersonPhotosViews };
var PersonPhotos = /** @class */ (function (_super) {
    __extends(PersonPhotos, _super);
    function PersonPhotos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", PersonPhotosCount)
    ], PersonPhotos.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstdate" }),
        __metadata("design:type", PersonPhotosFirstdate)
    ], PersonPhotos.prototype, "firstdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstdatetaken" }),
        __metadata("design:type", PersonPhotosFirstdatetaken)
    ], PersonPhotos.prototype, "firstdatetaken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", PersonPhotosViews)
    ], PersonPhotos.prototype, "views", void 0);
    return PersonPhotos;
}(SpeakeasyBase));
export { PersonPhotos };
var PersonPhotosurl = /** @class */ (function (_super) {
    __extends(PersonPhotosurl, _super);
    function PersonPhotosurl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonPhotosurl.prototype, "content", void 0);
    return PersonPhotosurl;
}(SpeakeasyBase));
export { PersonPhotosurl };
var PersonProfileurl = /** @class */ (function (_super) {
    __extends(PersonProfileurl, _super);
    function PersonProfileurl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonProfileurl.prototype, "content", void 0);
    return PersonProfileurl;
}(SpeakeasyBase));
export { PersonProfileurl };
var PersonRealname = /** @class */ (function (_super) {
    __extends(PersonRealname, _super);
    function PersonRealname() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonRealname.prototype, "content", void 0);
    return PersonRealname;
}(SpeakeasyBase));
export { PersonRealname };
var PersonTimezone = /** @class */ (function (_super) {
    __extends(PersonTimezone, _super);
    function PersonTimezone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PersonTimezone.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", String)
    ], PersonTimezone.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone_id" }),
        __metadata("design:type", String)
    ], PersonTimezone.prototype, "timezoneId", void 0);
    return PersonTimezone;
}(SpeakeasyBase));
export { PersonTimezone };
var PersonUnreadMessages = /** @class */ (function (_super) {
    __extends(PersonUnreadMessages, _super);
    function PersonUnreadMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonUnreadMessages.prototype, "content", void 0);
    return PersonUnreadMessages;
}(SpeakeasyBase));
export { PersonUnreadMessages };
var PersonUsername = /** @class */ (function (_super) {
    __extends(PersonUsername, _super);
    function PersonUsername() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PersonUsername.prototype, "content", void 0);
    return PersonUsername;
}(SpeakeasyBase));
export { PersonUsername };
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_buy_pro" }),
        __metadata("design:type", Boolean)
    ], Person.prototype, "canBuyPro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cover" }),
        __metadata("design:type", Cover)
    ], Person.prototype, "cover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverphoto" }),
        __metadata("design:type", PhotoUrLs)
    ], Person.prototype, "coverphoto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverphoto_farm" }),
        __metadata("design:type", String)
    ], Person.prototype, "coverphotoFarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverphoto_server" }),
        __metadata("design:type", String)
    ], Person.prototype, "coverphotoServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", PersonDescription)
    ], Person.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disable_keyboard_shortcuts" }),
        __metadata("design:type", PersonDisableKeyboardShortcuts)
    ], Person.prototype, "disableKeyboardShortcuts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire" }),
        __metadata("design:type", Boolean)
    ], Person.prototype, "expire", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_stats" }),
        __metadata("design:type", Boolean)
    ], Person.prototype, "hasStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconfarm" }),
        __metadata("design:type", String)
    ], Person.prototype, "iconfarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconserver" }),
        __metadata("design:type", String)
    ], Person.prototype, "iconserver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Person.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_ad_free" }),
        __metadata("design:type", Boolean)
    ], Person.prototype, "isAdFree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ispro" }),
        __metadata("design:type", Boolean)
    ], Person.prototype, "ispro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PersonLocation)
    ], Person.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mbox_sha1sum" }),
        __metadata("design:type", PersonMboxSha1sum)
    ], Person.prototype, "mboxSha1sum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileurl" }),
        __metadata("design:type", PersonMobileurl)
    ], Person.prototype, "mobileurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsid" }),
        __metadata("design:type", String)
    ], Person.prototype, "nsid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path_alias" }),
        __metadata("design:type", String)
    ], Person.prototype, "pathAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos" }),
        __metadata("design:type", PersonPhotos)
    ], Person.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photosurl" }),
        __metadata("design:type", PersonPhotosurl)
    ], Person.prototype, "photosurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileurl" }),
        __metadata("design:type", PersonProfileurl)
    ], Person.prototype, "profileurl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realname" }),
        __metadata("design:type", PersonRealname)
    ], Person.prototype, "realname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", PersonTimezone)
    ], Person.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unread_messages" }),
        __metadata("design:type", PersonUnreadMessages)
    ], Person.prototype, "unreadMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_secret" }),
        __metadata("design:type", String)
    ], Person.prototype, "userSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", PersonUsername)
    ], Person.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yintl" }),
        __metadata("design:type", String)
    ], Person.prototype, "yintl", void 0);
    return Person;
}(SpeakeasyBase));
export { Person };
