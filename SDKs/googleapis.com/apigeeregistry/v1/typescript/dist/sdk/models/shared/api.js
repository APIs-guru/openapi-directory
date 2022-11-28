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
// ApiInput
/**
 * A top-level description of an API. Produced by producers and are commitments to provide services.
**/
var ApiInput = /** @class */ (function (_super) {
    __extends(ApiInput, _super);
    function ApiInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], ApiInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], ApiInput.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ApiInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ApiInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ApiInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendedDeployment" }),
        __metadata("design:type", String)
    ], ApiInput.prototype, "recommendedDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendedVersion" }),
        __metadata("design:type", String)
    ], ApiInput.prototype, "recommendedVersion", void 0);
    return ApiInput;
}(SpeakeasyBase));
export { ApiInput };
// Api
/**
 * A top-level description of an API. Produced by producers and are commitments to provide services.
**/
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], Api.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], Api.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Api.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Api.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Api.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Api.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Api.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendedDeployment" }),
        __metadata("design:type", String)
    ], Api.prototype, "recommendedDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendedVersion" }),
        __metadata("design:type", String)
    ], Api.prototype, "recommendedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Api.prototype, "updateTime", void 0);
    return Api;
}(SpeakeasyBase));
export { Api };
