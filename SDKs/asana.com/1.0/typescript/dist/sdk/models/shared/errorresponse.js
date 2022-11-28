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
import { Error } from "./error";
// ErrorResponse
/**
 * Sadly, sometimes requests to the API are not successful. Failures can
 * occur for a wide range of reasons. In all cases, the API should return
 * an HTTP Status Code that indicates the nature of the failure,
 * with a response body in JSON format containing additional information.
 *
 *
 * In the event of a server error the response body will contain an error
 * phrase. These phrases are automatically generated using the
 * [node-asana-phrase
 * library](https://github.com/Asana/node-asana-phrase) and can be used by
 * Asana support to quickly look up the incident that caused the server
 * error.
**/
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: Error }),
        __metadata("design:type", Array)
    ], ErrorResponse.prototype, "errors", void 0);
    return ErrorResponse;
}(SpeakeasyBase));
export { ErrorResponse };
