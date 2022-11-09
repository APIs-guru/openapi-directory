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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var ListProgrammesAudioDescribedEnum;
(function (ListProgrammesAudioDescribedEnum) {
    ListProgrammesAudioDescribedEnum["True"] = "true";
    ListProgrammesAudioDescribedEnum["False"] = "false";
})(ListProgrammesAudioDescribedEnum || (ListProgrammesAudioDescribedEnum = {}));
export var ListProgrammesAvailabilityEnum;
(function (ListProgrammesAvailabilityEnum) {
    ListProgrammesAvailabilityEnum["Available"] = "available";
    ListProgrammesAvailabilityEnum["Pending"] = "pending";
})(ListProgrammesAvailabilityEnum || (ListProgrammesAvailabilityEnum = {}));
export var ListProgrammesAvailabilityEntityTypeEnum;
(function (ListProgrammesAvailabilityEntityTypeEnum) {
    ListProgrammesAvailabilityEntityTypeEnum["Episode"] = "episode";
    ListProgrammesAvailabilityEntityTypeEnum["Clip"] = "clip";
})(ListProgrammesAvailabilityEntityTypeEnum || (ListProgrammesAvailabilityEntityTypeEnum = {}));
export var ListProgrammesAvailabilityTypeEnum;
(function (ListProgrammesAvailabilityTypeEnum) {
    ListProgrammesAvailabilityTypeEnum["Ondemand"] = "ondemand";
    ListProgrammesAvailabilityTypeEnum["Webcast"] = "webcast";
    ListProgrammesAvailabilityTypeEnum["Simulcast"] = "simulcast";
})(ListProgrammesAvailabilityTypeEnum || (ListProgrammesAvailabilityTypeEnum = {}));
export var ListProgrammesDurationEnum;
(function (ListProgrammesDurationEnum) {
    ListProgrammesDurationEnum["Short"] = "short";
    ListProgrammesDurationEnum["Medium"] = "medium";
    ListProgrammesDurationEnum["Long"] = "long";
})(ListProgrammesDurationEnum || (ListProgrammesDurationEnum = {}));
export var ListProgrammesEmbargoedEnum;
(function (ListProgrammesEmbargoedEnum) {
    ListProgrammesEmbargoedEnum["Include"] = "include";
    ListProgrammesEmbargoedEnum["Exclude"] = "exclude";
    ListProgrammesEmbargoedEnum["Only"] = "only";
})(ListProgrammesEmbargoedEnum || (ListProgrammesEmbargoedEnum = {}));
export var ListProgrammesEntityTypeEnum;
(function (ListProgrammesEntityTypeEnum) {
    ListProgrammesEntityTypeEnum["Brand"] = "brand";
    ListProgrammesEntityTypeEnum["Series"] = "series";
    ListProgrammesEntityTypeEnum["Episode"] = "episode";
    ListProgrammesEntityTypeEnum["Clip"] = "clip";
})(ListProgrammesEntityTypeEnum || (ListProgrammesEntityTypeEnum = {}));
export var ListProgrammesMediaTypeEnum;
(function (ListProgrammesMediaTypeEnum) {
    ListProgrammesMediaTypeEnum["Audio"] = "audio";
    ListProgrammesMediaTypeEnum["AudioVideo"] = "audio_video";
})(ListProgrammesMediaTypeEnum || (ListProgrammesMediaTypeEnum = {}));
export var ListProgrammesMixinEnum;
(function (ListProgrammesMixinEnum) {
    ListProgrammesMixinEnum["AlternateImages"] = "alternate_images";
    ListProgrammesMixinEnum["AncestorTitles"] = "ancestor_titles";
    ListProgrammesMixinEnum["Availability"] = "availability";
    ListProgrammesMixinEnum["AvailableSimulcasts"] = "available_simulcasts";
    ListProgrammesMixinEnum["AvailableVersions"] = "available_versions";
    ListProgrammesMixinEnum["AvailableWebcasts"] = "available_webcasts";
    ListProgrammesMixinEnum["Contributions"] = "contributions";
    ListProgrammesMixinEnum["Duration"] = "duration";
    ListProgrammesMixinEnum["GenreGroupings"] = "genre_groupings";
    ListProgrammesMixinEnum["GenreGroups"] = "genre_groups";
    ListProgrammesMixinEnum["Images"] = "images";
    ListProgrammesMixinEnum["IsEmbeddable"] = "is_embeddable";
    ListProgrammesMixinEnum["PreviousNext"] = "previous_next";
    ListProgrammesMixinEnum["ProgrammeType"] = "programme_type";
    ListProgrammesMixinEnum["RelatedLinks"] = "related_links";
    ListProgrammesMixinEnum["Titles"] = "titles";
    ListProgrammesMixinEnum["VersionsAvailability"] = "versions_availability";
})(ListProgrammesMixinEnum || (ListProgrammesMixinEnum = {}));
export var ListProgrammesPaymentTypeEnum;
(function (ListProgrammesPaymentTypeEnum) {
    ListProgrammesPaymentTypeEnum["Free"] = "free";
    ListProgrammesPaymentTypeEnum["Bbcstore"] = "bbcstore";
    ListProgrammesPaymentTypeEnum["Uscansvod"] = "uscansvod";
})(ListProgrammesPaymentTypeEnum || (ListProgrammesPaymentTypeEnum = {}));
export var ListProgrammesSignedEnum;
(function (ListProgrammesSignedEnum) {
    ListProgrammesSignedEnum["Exclusive"] = "exclusive";
    ListProgrammesSignedEnum["Inclusive"] = "inclusive";
    ListProgrammesSignedEnum["Exclude"] = "exclude";
})(ListProgrammesSignedEnum || (ListProgrammesSignedEnum = {}));
export var ListProgrammesSortEnum;
(function (ListProgrammesSortEnum) {
    ListProgrammesSortEnum["GroupPosition"] = "group_position";
    ListProgrammesSortEnum["Pid"] = "pid";
    ListProgrammesSortEnum["Position"] = "position";
    ListProgrammesSortEnum["Promotion"] = "promotion";
    ListProgrammesSortEnum["ReleaseDate"] = "release_date";
    ListProgrammesSortEnum["Relevance"] = "relevance";
    ListProgrammesSortEnum["ScheduledStart"] = "scheduled_start";
    ListProgrammesSortEnum["StrictTitle"] = "strict_title";
    ListProgrammesSortEnum["Title"] = "title";
    ListProgrammesSortEnum["Tree"] = "tree";
})(ListProgrammesSortEnum || (ListProgrammesSortEnum = {}));
export var ListProgrammesSortDirectionEnum;
(function (ListProgrammesSortDirectionEnum) {
    ListProgrammesSortDirectionEnum["Ascending"] = "ascending";
    ListProgrammesSortDirectionEnum["Descending"] = "descending";
})(ListProgrammesSortDirectionEnum || (ListProgrammesSortDirectionEnum = {}));
export var ListProgrammesTleoEnum;
(function (ListProgrammesTleoEnum) {
    ListProgrammesTleoEnum["True"] = "true";
    ListProgrammesTleoEnum["False"] = "false";
})(ListProgrammesTleoEnum || (ListProgrammesTleoEnum = {}));
var ListProgrammesQueryParams = /** @class */ (function (_super) {
    __extends(ListProgrammesQueryParams, _super);
    function ListProgrammesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=audio_described" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "audioDescribed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability_entity_type" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "availabilityEntityType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability_from" }),
        __metadata("design:type", Date)
    ], ListProgrammesQueryParams.prototype, "availabilityFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability_type" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "availabilityType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=children_of" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "childrenOf", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=descendants_of" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "descendantsOf", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=duration" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=embargoed" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "embargoed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entity_type" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "entityType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=genre" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "genre", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=initial_letter" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "initialLetter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=initial_letter_end" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "initialLetterEnd", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=initial_letter_start" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "initialLetterStart", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=initial_letter_strict" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "initialLetterStrict", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=item" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "item", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=master_brand" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "masterBrand", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=media_set" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "mediaSet", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=media_type" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "mediaType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "mixin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListProgrammesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListProgrammesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "partnerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=payment_type" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "paymentType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=people" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "people", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "pid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=promoted_for" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "promotedFor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=signed" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "signed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tag_name" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "tagName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tag_scheme" }),
        __metadata("design:type", String)
    ], ListProgrammesQueryParams.prototype, "tagScheme", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tleo" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "tleo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", Array)
    ], ListProgrammesQueryParams.prototype, "version", void 0);
    return ListProgrammesQueryParams;
}(SpeakeasyBase));
export { ListProgrammesQueryParams };
var ListProgrammesRequest = /** @class */ (function (_super) {
    __extends(ListProgrammesRequest, _super);
    function ListProgrammesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListProgrammesQueryParams)
    ], ListProgrammesRequest.prototype, "queryParams", void 0);
    return ListProgrammesRequest;
}(SpeakeasyBase));
export { ListProgrammesRequest };
var ListProgrammesResponse = /** @class */ (function (_super) {
    __extends(ListProgrammesResponse, _super);
    function ListProgrammesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListProgrammesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListProgrammesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListProgrammesResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListProgrammesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProgrammesResponse.prototype, "nitro", void 0);
    return ListProgrammesResponse;
}(SpeakeasyBase));
export { ListProgrammesResponse };
