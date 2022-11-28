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
import * as shared from "../shared";
export var UpdateArtifactRuleConfigRuleEnum;
(function (UpdateArtifactRuleConfigRuleEnum) {
    UpdateArtifactRuleConfigRuleEnum["Validity"] = "VALIDITY";
    UpdateArtifactRuleConfigRuleEnum["Compatibility"] = "COMPATIBILITY";
})(UpdateArtifactRuleConfigRuleEnum || (UpdateArtifactRuleConfigRuleEnum = {}));
var UpdateArtifactRuleConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateArtifactRuleConfigPathParams, _super);
    function UpdateArtifactRuleConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artifactId" }),
        __metadata("design:type", String)
    ], UpdateArtifactRuleConfigPathParams.prototype, "artifactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule" }),
        __metadata("design:type", String)
    ], UpdateArtifactRuleConfigPathParams.prototype, "rule", void 0);
    return UpdateArtifactRuleConfigPathParams;
}(SpeakeasyBase));
export { UpdateArtifactRuleConfigPathParams };
var UpdateArtifactRuleConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateArtifactRuleConfigRequest, _super);
    function UpdateArtifactRuleConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateArtifactRuleConfigPathParams)
    ], UpdateArtifactRuleConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Rule)
    ], UpdateArtifactRuleConfigRequest.prototype, "request", void 0);
    return UpdateArtifactRuleConfigRequest;
}(SpeakeasyBase));
export { UpdateArtifactRuleConfigRequest };
var UpdateArtifactRuleConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateArtifactRuleConfigResponse, _super);
    function UpdateArtifactRuleConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateArtifactRuleConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], UpdateArtifactRuleConfigResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Rule)
    ], UpdateArtifactRuleConfigResponse.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateArtifactRuleConfigResponse.prototype, "statusCode", void 0);
    return UpdateArtifactRuleConfigResponse;
}(SpeakeasyBase));
export { UpdateArtifactRuleConfigResponse };
