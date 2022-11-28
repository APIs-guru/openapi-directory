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
var ApiResourceLinkedResources = /** @class */ (function (_super) {
    __extends(ApiResourceLinkedResources, _super);
    function ApiResourceLinkedResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiResourceLinkedResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unified_property" }),
        __metadata("design:type", String)
    ], ApiResourceLinkedResources.prototype, "unifiedProperty", void 0);
    return ApiResourceLinkedResources;
}(SpeakeasyBase));
export { ApiResourceLinkedResources };
var ApiResource = /** @class */ (function (_super) {
    __extends(ApiResource, _super);
    function ApiResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linked_resources", elemType: ApiResourceLinkedResources }),
        __metadata("design:type", Array)
    ], ApiResource.prototype, "linkedResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiResource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", Map)
    ], ApiResource.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiResource.prototype, "status", void 0);
    return ApiResource;
}(SpeakeasyBase));
export { ApiResource };
