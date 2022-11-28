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
var GetApiVi200ApplicationJsonLinksHolidays = /** @class */ (function (_super) {
    __extends(GetApiVi200ApplicationJsonLinksHolidays, _super);
    function GetApiVi200ApplicationJsonLinksHolidays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetApiVi200ApplicationJsonLinksHolidays.prototype, "href", void 0);
    return GetApiVi200ApplicationJsonLinksHolidays;
}(SpeakeasyBase));
export { GetApiVi200ApplicationJsonLinksHolidays };
var GetApiVi200ApplicationJsonLinksProvinces = /** @class */ (function (_super) {
    __extends(GetApiVi200ApplicationJsonLinksProvinces, _super);
    function GetApiVi200ApplicationJsonLinksProvinces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetApiVi200ApplicationJsonLinksProvinces.prototype, "href", void 0);
    return GetApiVi200ApplicationJsonLinksProvinces;
}(SpeakeasyBase));
export { GetApiVi200ApplicationJsonLinksProvinces };
var GetApiVi200ApplicationJsonLinksSelf = /** @class */ (function (_super) {
    __extends(GetApiVi200ApplicationJsonLinksSelf, _super);
    function GetApiVi200ApplicationJsonLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetApiVi200ApplicationJsonLinksSelf.prototype, "href", void 0);
    return GetApiVi200ApplicationJsonLinksSelf;
}(SpeakeasyBase));
export { GetApiVi200ApplicationJsonLinksSelf };
var GetApiVi200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetApiVi200ApplicationJsonLinks, _super);
    function GetApiVi200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holidays" }),
        __metadata("design:type", GetApiVi200ApplicationJsonLinksHolidays)
    ], GetApiVi200ApplicationJsonLinks.prototype, "holidays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provinces" }),
        __metadata("design:type", GetApiVi200ApplicationJsonLinksProvinces)
    ], GetApiVi200ApplicationJsonLinks.prototype, "provinces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", GetApiVi200ApplicationJsonLinksSelf)
    ], GetApiVi200ApplicationJsonLinks.prototype, "self", void 0);
    return GetApiVi200ApplicationJsonLinks;
}(SpeakeasyBase));
export { GetApiVi200ApplicationJsonLinks };
var GetApiVi200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiVi200ApplicationJson, _super);
    function GetApiVi200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", GetApiVi200ApplicationJsonLinks)
    ], GetApiVi200ApplicationJson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetApiVi200ApplicationJson.prototype, "message", void 0);
    return GetApiVi200ApplicationJson;
}(SpeakeasyBase));
export { GetApiVi200ApplicationJson };
var GetApiViResponse = /** @class */ (function (_super) {
    __extends(GetApiViResponse, _super);
    function GetApiViResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiViResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiViResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVi200ApplicationJson)
    ], GetApiViResponse.prototype, "getApiVi200ApplicationJsonObject", void 0);
    return GetApiViResponse;
}(SpeakeasyBase));
export { GetApiViResponse };
