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
var OrgsListOutsideCollaboratorsPathParams = /** @class */ (function (_super) {
    __extends(OrgsListOutsideCollaboratorsPathParams, _super);
    function OrgsListOutsideCollaboratorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsListOutsideCollaboratorsPathParams.prototype, "org", void 0);
    return OrgsListOutsideCollaboratorsPathParams;
}(SpeakeasyBase));
export { OrgsListOutsideCollaboratorsPathParams };
export var OrgsListOutsideCollaboratorsFilterEnum;
(function (OrgsListOutsideCollaboratorsFilterEnum) {
    OrgsListOutsideCollaboratorsFilterEnum["TwofaDisabled"] = "2fa_disabled";
    OrgsListOutsideCollaboratorsFilterEnum["All"] = "all";
})(OrgsListOutsideCollaboratorsFilterEnum || (OrgsListOutsideCollaboratorsFilterEnum = {}));
var OrgsListOutsideCollaboratorsQueryParams = /** @class */ (function (_super) {
    __extends(OrgsListOutsideCollaboratorsQueryParams, _super);
    function OrgsListOutsideCollaboratorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], OrgsListOutsideCollaboratorsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], OrgsListOutsideCollaboratorsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], OrgsListOutsideCollaboratorsQueryParams.prototype, "perPage", void 0);
    return OrgsListOutsideCollaboratorsQueryParams;
}(SpeakeasyBase));
export { OrgsListOutsideCollaboratorsQueryParams };
var OrgsListOutsideCollaboratorsRequest = /** @class */ (function (_super) {
    __extends(OrgsListOutsideCollaboratorsRequest, _super);
    function OrgsListOutsideCollaboratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListOutsideCollaboratorsPathParams)
    ], OrgsListOutsideCollaboratorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListOutsideCollaboratorsQueryParams)
    ], OrgsListOutsideCollaboratorsRequest.prototype, "queryParams", void 0);
    return OrgsListOutsideCollaboratorsRequest;
}(SpeakeasyBase));
export { OrgsListOutsideCollaboratorsRequest };
var OrgsListOutsideCollaboratorsResponse = /** @class */ (function (_super) {
    __extends(OrgsListOutsideCollaboratorsResponse, _super);
    function OrgsListOutsideCollaboratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsListOutsideCollaboratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OrgsListOutsideCollaboratorsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsListOutsideCollaboratorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], OrgsListOutsideCollaboratorsResponse.prototype, "simpleUsers", void 0);
    return OrgsListOutsideCollaboratorsResponse;
}(SpeakeasyBase));
export { OrgsListOutsideCollaboratorsResponse };
