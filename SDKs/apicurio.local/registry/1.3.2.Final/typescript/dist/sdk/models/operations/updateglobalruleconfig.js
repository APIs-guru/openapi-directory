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
export var UpdateGlobalRuleConfigRuleEnum;
(function (UpdateGlobalRuleConfigRuleEnum) {
    UpdateGlobalRuleConfigRuleEnum["Validity"] = "VALIDITY";
    UpdateGlobalRuleConfigRuleEnum["Compatibility"] = "COMPATIBILITY";
})(UpdateGlobalRuleConfigRuleEnum || (UpdateGlobalRuleConfigRuleEnum = {}));
var UpdateGlobalRuleConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateGlobalRuleConfigPathParams, _super);
    function UpdateGlobalRuleConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=rule" }),
        __metadata("design:type", String)
    ], UpdateGlobalRuleConfigPathParams.prototype, "rule", void 0);
    return UpdateGlobalRuleConfigPathParams;
}(SpeakeasyBase));
export { UpdateGlobalRuleConfigPathParams };
var UpdateGlobalRuleConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateGlobalRuleConfigRequest, _super);
    function UpdateGlobalRuleConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateGlobalRuleConfigPathParams)
    ], UpdateGlobalRuleConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Rule)
    ], UpdateGlobalRuleConfigRequest.prototype, "request", void 0);
    return UpdateGlobalRuleConfigRequest;
}(SpeakeasyBase));
export { UpdateGlobalRuleConfigRequest };
var UpdateGlobalRuleConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateGlobalRuleConfigResponse, _super);
    function UpdateGlobalRuleConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateGlobalRuleConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], UpdateGlobalRuleConfigResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Rule)
    ], UpdateGlobalRuleConfigResponse.prototype, "rule", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateGlobalRuleConfigResponse.prototype, "statusCode", void 0);
    return UpdateGlobalRuleConfigResponse;
}(SpeakeasyBase));
export { UpdateGlobalRuleConfigResponse };
