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
var MigrationsGetCommitAuthorsPathParams = /** @class */ (function (_super) {
    __extends(MigrationsGetCommitAuthorsPathParams, _super);
    function MigrationsGetCommitAuthorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], MigrationsGetCommitAuthorsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], MigrationsGetCommitAuthorsPathParams.prototype, "repo", void 0);
    return MigrationsGetCommitAuthorsPathParams;
}(SpeakeasyBase));
export { MigrationsGetCommitAuthorsPathParams };
var MigrationsGetCommitAuthorsQueryParams = /** @class */ (function (_super) {
    __extends(MigrationsGetCommitAuthorsQueryParams, _super);
    function MigrationsGetCommitAuthorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Number)
    ], MigrationsGetCommitAuthorsQueryParams.prototype, "since", void 0);
    return MigrationsGetCommitAuthorsQueryParams;
}(SpeakeasyBase));
export { MigrationsGetCommitAuthorsQueryParams };
var MigrationsGetCommitAuthorsRequest = /** @class */ (function (_super) {
    __extends(MigrationsGetCommitAuthorsRequest, _super);
    function MigrationsGetCommitAuthorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MigrationsGetCommitAuthorsPathParams)
    ], MigrationsGetCommitAuthorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MigrationsGetCommitAuthorsQueryParams)
    ], MigrationsGetCommitAuthorsRequest.prototype, "queryParams", void 0);
    return MigrationsGetCommitAuthorsRequest;
}(SpeakeasyBase));
export { MigrationsGetCommitAuthorsRequest };
var MigrationsGetCommitAuthorsResponse = /** @class */ (function (_super) {
    __extends(MigrationsGetCommitAuthorsResponse, _super);
    function MigrationsGetCommitAuthorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MigrationsGetCommitAuthorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MigrationsGetCommitAuthorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], MigrationsGetCommitAuthorsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PorterAuthor }),
        __metadata("design:type", Array)
    ], MigrationsGetCommitAuthorsResponse.prototype, "porterAuthors", void 0);
    return MigrationsGetCommitAuthorsResponse;
}(SpeakeasyBase));
export { MigrationsGetCommitAuthorsResponse };
