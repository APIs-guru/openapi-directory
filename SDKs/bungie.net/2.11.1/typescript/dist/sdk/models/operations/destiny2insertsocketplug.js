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
var Destiny2InsertSocketPlugSecurity = /** @class */ (function (_super) {
    __extends(Destiny2InsertSocketPlugSecurity, _super);
    function Destiny2InsertSocketPlugSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Destiny2InsertSocketPlugSecurity.prototype, "oauth2", void 0);
    return Destiny2InsertSocketPlugSecurity;
}(SpeakeasyBase));
export { Destiny2InsertSocketPlugSecurity };
var Destiny2InsertSocketPlugRequest = /** @class */ (function (_super) {
    __extends(Destiny2InsertSocketPlugRequest, _super);
    function Destiny2InsertSocketPlugRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Destiny2InsertSocketPlugSecurity)
    ], Destiny2InsertSocketPlugRequest.prototype, "security", void 0);
    return Destiny2InsertSocketPlugRequest;
}(SpeakeasyBase));
export { Destiny2InsertSocketPlugRequest };
var Destiny2InsertSocketPlugResponse = /** @class */ (function (_super) {
    __extends(Destiny2InsertSocketPlugResponse, _super);
    function Destiny2InsertSocketPlugResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2InsertSocketPlugResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], Destiny2InsertSocketPlugResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], Destiny2InsertSocketPlugResponse.prototype, "statusCode", void 0);
    return Destiny2InsertSocketPlugResponse;
}(SpeakeasyBase));
export { Destiny2InsertSocketPlugResponse };
