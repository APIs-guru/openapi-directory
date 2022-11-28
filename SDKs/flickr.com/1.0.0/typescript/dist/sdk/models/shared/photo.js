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
import { Note } from "./note";
import { Owner } from "./owner";
import { Tag } from "./tag";
import { Url } from "./url";
var PhotoComments = /** @class */ (function (_super) {
    __extends(PhotoComments, _super);
    function PhotoComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PhotoComments.prototype, "content", void 0);
    return PhotoComments;
}(SpeakeasyBase));
export { PhotoComments };
var PhotoDates = /** @class */ (function (_super) {
    __extends(PhotoDates, _super);
    function PhotoDates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastupdate" }),
        __metadata("design:type", String)
    ], PhotoDates.prototype, "lastupdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posted" }),
        __metadata("design:type", String)
    ], PhotoDates.prototype, "posted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taken" }),
        __metadata("design:type", String)
    ], PhotoDates.prototype, "taken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=takengranularity" }),
        __metadata("design:type", String)
    ], PhotoDates.prototype, "takengranularity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=takenunknown" }),
        __metadata("design:type", Boolean)
    ], PhotoDates.prototype, "takenunknown", void 0);
    return PhotoDates;
}(SpeakeasyBase));
export { PhotoDates };
var PhotoDescription = /** @class */ (function (_super) {
    __extends(PhotoDescription, _super);
    function PhotoDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PhotoDescription.prototype, "content", void 0);
    return PhotoDescription;
}(SpeakeasyBase));
export { PhotoDescription };
var PhotoEditability = /** @class */ (function (_super) {
    __extends(PhotoEditability, _super);
    function PhotoEditability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canaddmeta" }),
        __metadata("design:type", Boolean)
    ], PhotoEditability.prototype, "canaddmeta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancomment" }),
        __metadata("design:type", Boolean)
    ], PhotoEditability.prototype, "cancomment", void 0);
    return PhotoEditability;
}(SpeakeasyBase));
export { PhotoEditability };
var PhotoNotes = /** @class */ (function (_super) {
    __extends(PhotoNotes, _super);
    function PhotoNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note", elemType: Note }),
        __metadata("design:type", Array)
    ], PhotoNotes.prototype, "note", void 0);
    return PhotoNotes;
}(SpeakeasyBase));
export { PhotoNotes };
var PhotoPeople = /** @class */ (function (_super) {
    __extends(PhotoPeople, _super);
    function PhotoPeople() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=haspeople" }),
        __metadata("design:type", Boolean)
    ], PhotoPeople.prototype, "haspeople", void 0);
    return PhotoPeople;
}(SpeakeasyBase));
export { PhotoPeople };
var PhotoPermissions = /** @class */ (function (_super) {
    __extends(PhotoPermissions, _super);
    function PhotoPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permaddmeta" }),
        __metadata("design:type", String)
    ], PhotoPermissions.prototype, "permaddmeta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permcomment" }),
        __metadata("design:type", String)
    ], PhotoPermissions.prototype, "permcomment", void 0);
    return PhotoPermissions;
}(SpeakeasyBase));
export { PhotoPermissions };
var PhotoPubliceditability = /** @class */ (function (_super) {
    __extends(PhotoPubliceditability, _super);
    function PhotoPubliceditability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canaddmeta" }),
        __metadata("design:type", Boolean)
    ], PhotoPubliceditability.prototype, "canaddmeta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancomment" }),
        __metadata("design:type", Boolean)
    ], PhotoPubliceditability.prototype, "cancomment", void 0);
    return PhotoPubliceditability;
}(SpeakeasyBase));
export { PhotoPubliceditability };
var PhotoTags = /** @class */ (function (_super) {
    __extends(PhotoTags, _super);
    function PhotoTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag", elemType: Tag }),
        __metadata("design:type", Array)
    ], PhotoTags.prototype, "tag", void 0);
    return PhotoTags;
}(SpeakeasyBase));
export { PhotoTags };
var PhotoTitle = /** @class */ (function (_super) {
    __extends(PhotoTitle, _super);
    function PhotoTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], PhotoTitle.prototype, "content", void 0);
    return PhotoTitle;
}(SpeakeasyBase));
export { PhotoTitle };
var PhotoUrls = /** @class */ (function (_super) {
    __extends(PhotoUrls, _super);
    function PhotoUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url", elemType: Url }),
        __metadata("design:type", Array)
    ], PhotoUrls.prototype, "url", void 0);
    return PhotoUrls;
}(SpeakeasyBase));
export { PhotoUrls };
var PhotoUsage = /** @class */ (function (_super) {
    __extends(PhotoUsage, _super);
    function PhotoUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canblog" }),
        __metadata("design:type", Boolean)
    ], PhotoUsage.prototype, "canblog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candownload" }),
        __metadata("design:type", Boolean)
    ], PhotoUsage.prototype, "candownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canprint" }),
        __metadata("design:type", Boolean)
    ], PhotoUsage.prototype, "canprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canshare" }),
        __metadata("design:type", Boolean)
    ], PhotoUsage.prototype, "canshare", void 0);
    return PhotoUsage;
}(SpeakeasyBase));
export { PhotoUsage };
var PhotoVisibility = /** @class */ (function (_super) {
    __extends(PhotoVisibility, _super);
    function PhotoVisibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isfamily" }),
        __metadata("design:type", Boolean)
    ], PhotoVisibility.prototype, "isfamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isfriend" }),
        __metadata("design:type", Boolean)
    ], PhotoVisibility.prototype, "isfriend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ispublic" }),
        __metadata("design:type", Boolean)
    ], PhotoVisibility.prototype, "ispublic", void 0);
    return PhotoVisibility;
}(SpeakeasyBase));
export { PhotoVisibility };
var Photo = /** @class */ (function (_super) {
    __extends(Photo, _super);
    function Photo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", PhotoComments)
    ], Photo.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dates" }),
        __metadata("design:type", PhotoDates)
    ], Photo.prototype, "dates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateuploaded" }),
        __metadata("design:type", String)
    ], Photo.prototype, "dateuploaded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", PhotoDescription)
    ], Photo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editability" }),
        __metadata("design:type", PhotoEditability)
    ], Photo.prototype, "editability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=farm" }),
        __metadata("design:type", String)
    ], Photo.prototype, "farm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Photo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isfavorite" }),
        __metadata("design:type", Boolean)
    ], Photo.prototype, "isfavorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], Photo.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media" }),
        __metadata("design:type", String)
    ], Photo.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", PhotoNotes)
    ], Photo.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalsecret" }),
        __metadata("design:type", String)
    ], Photo.prototype, "originalsecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", Owner)
    ], Photo.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=people" }),
        __metadata("design:type", PhotoPeople)
    ], Photo.prototype, "people", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", PhotoPermissions)
    ], Photo.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publiceditability" }),
        __metadata("design:type", PhotoPubliceditability)
    ], Photo.prototype, "publiceditability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotation" }),
        __metadata("design:type", String)
    ], Photo.prototype, "rotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe" }),
        __metadata("design:type", Boolean)
    ], Photo.prototype, "safe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safety_level" }),
        __metadata("design:type", String)
    ], Photo.prototype, "safetyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], Photo.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", String)
    ], Photo.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", PhotoTags)
    ], Photo.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", PhotoTitle)
    ], Photo.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls" }),
        __metadata("design:type", PhotoUrls)
    ], Photo.prototype, "urls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage" }),
        __metadata("design:type", PhotoUsage)
    ], Photo.prototype, "usage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=views" }),
        __metadata("design:type", String)
    ], Photo.prototype, "views", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", PhotoVisibility)
    ], Photo.prototype, "visibility", void 0);
    return Photo;
}(SpeakeasyBase));
export { Photo };
