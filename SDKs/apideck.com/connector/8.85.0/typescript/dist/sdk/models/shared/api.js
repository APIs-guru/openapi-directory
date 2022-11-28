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
import { ResourceStatusEnum } from "./resourcestatusenum";
import { ApiStatusEnum } from "./apistatusenum";
var ApiResources = /** @class */ (function (_super) {
    __extends(ApiResources, _super);
    function ApiResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excluded_from_coverage" }),
        __metadata("design:type", Boolean)
    ], ApiResources.prototype, "excludedFromCoverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiResources.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiResources.prototype, "status", void 0);
    return ApiResources;
}(SpeakeasyBase));
export { ApiResources };
export var ApiTypeEnum;
(function (ApiTypeEnum) {
    ApiTypeEnum["Platform"] = "platform";
    ApiTypeEnum["Unified"] = "unified";
})(ApiTypeEnum || (ApiTypeEnum = {}));
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_reference_url" }),
        __metadata("design:type", String)
    ], Api.prototype, "apiReferenceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], Api.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Api.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], Api.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Api.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Api.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postman_collection_id" }),
        __metadata("design:type", String)
    ], Api.prototype, "postmanCollectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: ApiResources }),
        __metadata("design:type", Array)
    ], Api.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec_url" }),
        __metadata("design:type", String)
    ], Api.prototype, "specUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Api.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Api.prototype, "type", void 0);
    return Api;
}(SpeakeasyBase));
export { Api };
