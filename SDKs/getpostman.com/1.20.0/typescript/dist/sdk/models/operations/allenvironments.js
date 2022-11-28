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
var AllEnvironments200ApplicationJsonEnvironments = /** @class */ (function (_super) {
    __extends(AllEnvironments200ApplicationJsonEnvironments, _super);
    function AllEnvironments200ApplicationJsonEnvironments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AllEnvironments200ApplicationJsonEnvironments.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AllEnvironments200ApplicationJsonEnvironments.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], AllEnvironments200ApplicationJsonEnvironments.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], AllEnvironments200ApplicationJsonEnvironments.prototype, "uid", void 0);
    return AllEnvironments200ApplicationJsonEnvironments;
}(SpeakeasyBase));
export { AllEnvironments200ApplicationJsonEnvironments };
var AllEnvironments200ApplicationJson = /** @class */ (function (_super) {
    __extends(AllEnvironments200ApplicationJson, _super);
    function AllEnvironments200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments", elemType: AllEnvironments200ApplicationJsonEnvironments }),
        __metadata("design:type", Array)
    ], AllEnvironments200ApplicationJson.prototype, "environments", void 0);
    return AllEnvironments200ApplicationJson;
}(SpeakeasyBase));
export { AllEnvironments200ApplicationJson };
var AllEnvironmentsResponse = /** @class */ (function (_super) {
    __extends(AllEnvironmentsResponse, _super);
    function AllEnvironmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AllEnvironmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AllEnvironmentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllEnvironments200ApplicationJson)
    ], AllEnvironmentsResponse.prototype, "allEnvironments200ApplicationJsonObject", void 0);
    return AllEnvironmentsResponse;
}(SpeakeasyBase));
export { AllEnvironmentsResponse };
